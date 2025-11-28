import React, { useState, useEffect } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";
import * as pdfjsLib from 'pdfjs-dist';
import './App.css';

// Initialize PDF.js worker
pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

function App() {
  const [topic, setTopic] = useState('');
  const [apiKey, setApiKey] = useState(localStorage.getItem('gemini_api_key') || '');
  const [showSettings, setShowSettings] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [simulationReady, setSimulationReady] = useState(false);
  const [simulationData, setSimulationData] = useState(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [error, setError] = useState('');
  const [isReadingFile, setIsReadingFile] = useState(false);

  useEffect(() => {
    if (apiKey) {
      localStorage.setItem('gemini_api_key', apiKey);
    }
  }, [apiKey]);

  const readPdfContent = async (file) => {
    try {
      const arrayBuffer = await file.arrayBuffer();
      const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
      let fullText = '';

      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const textContent = await page.getTextContent();
        const pageText = textContent.items.map(item => item.str).join(' ');
        fullText += pageText + '\n';
      }
      return fullText;
    } catch (err) {
      console.error("PDF reading error:", err);
      throw new Error("Impossible de lire le fichier PDF.");
    }
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setIsReadingFile(true);
    setError('');

    try {
      let content = '';
      if (file.type === 'application/pdf') {
        content = await readPdfContent(file);
      } else {
        content = await new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = (e) => resolve(e.target.result);
          reader.onerror = (e) => reject(e);
          reader.readAsText(file);
        });
      }

      // Truncate if too long for basic prompt (approx 30k chars safety limit for Flash)
      if (content.length > 30000) {
        content = content.substring(0, 30000) + "... [Tronqué]";
      }

      setTopic(content);
    } catch (err) {
      setError("Erreur lors de la lecture du fichier: " + err.message);
    } finally {
      setIsReadingFile(false);
    }
  };

  const generateSimulation = async (topicText) => {
    if (!apiKey) {
      setError("Veuillez configurer votre clé API Gemini dans les paramètres.");
      setShowSettings(true);
      return;
    }

    setIsGenerating(true);
    setError('');

    try {
      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

      const prompt = `
        You are an expert educational simulation designer. Create a step-by-step interactive simulation explanation for the following topic or content:
        
        ---
        ${topicText}
        ---
        
        Return ONLY valid JSON (no markdown formatting) with the following structure:
        {
          "title": "Simulation Title",
          "summary": "Brief summary of what the user will learn",
          "steps": [
            {
              "id": 1,
              "title": "Step Title",
              "description": "Detailed explanation of what happens in this step.",
              "visual_emoji": "A single emoji representing this step",
              "visual_desc": "Short description of the visual action"
            }
          ]
        }
        Ensure there are at least 3-5 steps. Simplify complex technical terms.
      `;

      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();

      // Clean up markdown if present
      const jsonStr = text.replace(/```json/g, '').replace(/```/g, '').trim();
      const data = JSON.parse(jsonStr);

      setSimulationData(data);
      setSimulationReady(true);
      setCurrentStep(0);
    } catch (err) {
      console.error("Generation error:", err);
      setError("Erreur lors de la génération. Vérifiez votre clé API ou réessayez.");
    } finally {
      setIsGenerating(false);
    }
  };

  const handleGenerate = (e) => {
    e.preventDefault();
    if (!topic) return;
    generateSimulation(topic);
  };

  const reset = () => {
    setSimulationReady(false);
    setTopic('');
    setSimulationData(null);
    setCurrentStep(0);
  };

  const nextStep = () => {
    if (simulationData && currentStep < simulationData.steps.length - 1) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <div className="header-top">
          <div className="logo">Simu<span className="highlight">Xplain</span></div>
          <button
            className="settings-btn"
            onClick={() => setShowSettings(!showSettings)}
            title="Paramètres API"
          >
            ⚙️
          </button>
        </div>
        <p className="subtitle">Transformez la complexité en expérience interactive</p>

        {showSettings && (
          <div className="settings-panel glass-panel">
            <label>Clé API Gemini</label>
            <input
              type="password"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              placeholder="Collez votre clé API ici..."
            />
            <small>La clé est stockée localement dans votre navigateur.</small>
          </div>
        )}
      </header>

      <main>
        {error && <div className="error-message">{error}</div>}

        {!simulationReady ? (
          <div className="input-section">
            <div className="card glass-panel">
              <h2>Que voulez-vous comprendre aujourd'hui ?</h2>
              <form onSubmit={handleGenerate}>
                <div className="input-group">
                  <label>Sujet ou Concept</label>
                  <textarea
                    placeholder="ex: Comment fonctionne un moteur, ou collez un texte..."
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    rows={4}
                    style={{
                      width: '100%',
                      padding: '1rem',
                      background: 'rgba(0, 0, 0, 0.2)',
                      border: '1px solid var(--glass-border)',
                      borderRadius: '12px',
                      color: 'white',
                      fontSize: '1rem',
                      resize: 'vertical'
                    }}
                  />
                </div>

                <div className="divider"><span>OU</span></div>

                <div className="upload-area">
                  <span className="icon">📄</span>
                  <p>Déposez un PDF, document texte ou JSON</p>
                  <input
                    type="file"
                    accept=".txt,.md,.json,.pdf"
                    onChange={handleFileUpload}
                    style={{ display: 'block', margin: '0 auto' }}
                  />
                  {isReadingFile && <p className="loading-text"><span className="spinner">⏳</span> Lecture du fichier...</p>}
                </div>

                <button type="submit" className="primary-btn" disabled={isGenerating || !topic || isReadingFile}>
                  {isGenerating ? (
                    <span className="loading-text">
                      <span className="spinner">✨</span> Génération avec Gemini...
                    </span>
                  ) : 'Générer la Simulation'}
                </button>
              </form>
            </div>
          </div>
        ) : (
          <div className="simulation-view">
            <div className="simulation-header">
              <button onClick={reset} className="back-btn">← Nouveau sujet</button>
              <h2>{simulationData.title}</h2>
            </div>

            <div className="simulation-container glass-panel">
              <div className="simulation-canvas">
                <div className="step-indicator">
                  Étape {currentStep + 1} / {simulationData.steps.length}
                </div>

                <div className="visual-stage">
                  <div className="main-emoji" key={currentStep}>
                    {simulationData.steps[currentStep].visual_emoji}
                  </div>
                  <p className="visual-desc">{simulationData.steps[currentStep].visual_desc}</p>
                </div>

                <div className="controls">
                  <button onClick={prevStep} disabled={currentStep === 0}>⏪ Précédent</button>
                  <div className="progress-dots">
                    {simulationData.steps.map((_, idx) => (
                      <span
                        key={idx}
                        className={`dot ${idx === currentStep ? 'active' : ''}`}
                        onClick={() => setCurrentStep(idx)}
                      />
                    ))}
                  </div>
                  <button onClick={nextStep} disabled={currentStep === simulationData.steps.length - 1}>Suivant ⏩</button>
                </div>
              </div>

              <div className="explanation-panel">
                <h3>{simulationData.steps[currentStep].title}</h3>
                <p className="step-description">
                  {simulationData.steps[currentStep].description}
                </p>

                <div className="context-box">
                  <h4>Résumé global</h4>
                  <p>{simulationData.summary}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
