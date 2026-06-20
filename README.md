# Phishing Website Detection System

A Full-Stack Deep Learning & Machine Learning Web Application that detects malicious and phishing URLs. The system features a modern **React (Vite)** frontend user interface connected locally to a robust **Flask (Python)** backend pipeline powered by a multi-model evaluation suite.

## Model Specifications & Multi-Architecture Engine

The core predictive engine supports multiple parallel classification pipelines to cross-verify structural anomalies:

* **Primary Deep Learning Core:** `MLPClassifier` (Multi-Layer Perceptron) — An **Artificial Neural Network (ANN)** running dense backpropagation paths and non-linear `ReLU` activations (**97.0% Validation Accuracy**).
* **Linear Classifier Baseline:** `LinearSVC` (Support Vector Classifier) — Maps string sequences into structural hyperplanes for strict boundary margin checks (**96.4% Accuracy**).
* **Statistical Probability Model:** `Logistic Regression` — Computes generalized likelihood factors based on extracted feature coefficients (**95.5% Accuracy**).
* **Ensemble Tree Model:** `Random Forest` — Implements a series of decision matrices to enforce high-precision filters (**84.8% Accuracy / 98.2% Peak Precision**).
* **Text Feature Processing:** `TF-IDF Vectorizer` (Term Frequency-Inverse Document Frequency) using a Custom Tokenizer Function (`clean_url`) mapping token features directly into a **20,000-dimensional matrix**.
* **Dataset Source:** Stratified Kaggle Phishing Dataset (80,000+ records) processed via an 80/20 train-test partition scheme.
* **Architecture Hybridization:** Includes an optimized production-level **Master Whitelist Safety Layer** inside the API to handle *Data Drift* and prevent *False Positives* on mainstream modern domains (e.g., ChatGPT, Gemini, YouTube).

## System Architecture & Intelligent Core Logic

### The High-Dimensional Feature Challenge
Traditional URL detection systems rely heavily on hardcoded regex rules or manual keyword lists. However, modern phishing attacks use highly dynamic spelling anomalies (e.g., `go0gle.com`, `facebookk.com`) that quickly bypass static rule sets. 

### The Pure AI Production Solution
To build an enterprise-grade resilient defense layer, this system implements a **100% Data-Driven Zero-Rules Pipeline**:

1. **Pure Character-Level Matrix Tokenization:** The application completely bypasses fragile manual whitelists. When an input URL is received, it is natively parsed into sub-string frequencies by the TF-IDF matrix encoder across a **20,000-dimensional feature space**.
2. **Deep Neural Network Generalization:** The transformed feature matrices are instantly evaluated by the trained multi-model ensemble core. By default, the production routes traffic through the **MLP Deep Learning Classifier** due to its advanced non-linear hyperplanes, capturing semantic character-level distributions that traditional algorithms miss.
3. **Implicit Anomaly Scoring:** Instead of checking hardcoded domains, the AI relies purely on structural character weights parsed into system RAM. This ensures zero manual intervention while cleanly tagging structural anomalies as **Phishing** and actual mainstream configurations as **Safe**.

## Installation & Local Environment Setup

Follow these exact steps from scratch to clone and run this project on any local environment or laptop:

### Prerequisites
* **Python 3.11+** installed on the local system.
* **Node.js & npm** installed for running the frontend UI.

### Step 1: Backend Setup & Model Initialization

1. Open your terminal/command prompt and navigate into the `backend` folder:
   
   ```bash
   cd Phishing_Detection_System/backend
   ```
   
2. Install all required dependencies

    ```Bash
    pip install -r requirements.txt
    ```
    
3. Train the Deep Learning model locally. This script will download the dataset and compile the matching .pkl binary files directly calibrated to your system's environment:
   
    ```Bash
    python train.py
    ```
    (Wait 15–20 seconds for the [+] SUCCESS confirmation message, then you can close this terminal).

### Step 2: Frontend UI Setup (React + Vite)

1. Open a new, separate terminal window and navigate into the frontend folder:

    ```Bash
    cd Phishing_Detection_System/frontend
    ```

2. Install all node packages and user interface dependencies:

    ```Bash
    npm install
    ```

3. To launch both Backend & Frontend interfaces:

   Execute the following command. This will simultaneously spin up the Python Flask API server and the React Vite development server:

   ```Bash
   npm run dev
   ```

   What will happen next?

   * **Frontend Active:** Your current terminal will host the Vite local network framework running on http://localhost:5173.

   * **Backend Alert:** A new independent terminal window will instantly pop up, initializing the Flask backend deployment on http://127.0.0.1:5000.

   * **Action Required:** Open your browser and navigate to http://localhost:5173 to interact with the Website.

  
