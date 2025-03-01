// Include Tesseract.js
const { createWorker } = Tesseract;

// Initialize the Tesseract worker
async function initWorker() {
    const worker = await createWorker();
    await worker.load();
    await worker.loadLanguage('eng');
    await worker.initialize('eng');
    return worker;
}

document.getElementById("processImage").addEventListener("click", async () => {
    const fileInput = document.getElementById("imageUpload");
    const outputElement = document.getElementById("output");

    // Show processing message while working
    outputElement.innerText = "Processing...";

    // Check if a file is selected
    if (fileInput.files.length === 0) {
        outputElement.innerText = "Please upload an image first.";
        return;
    }

    const file = fileInput.files[0];
    const reader = new FileReader();

    reader.onload = async function () {
        try {
            // Initialize worker
            const worker = await initWorker();
            
            // Recognize text from the uploaded image
            const { data: { text } } = await worker.recognize(reader.result);
            await worker.terminate();  // Terminate the worker once done

            // Display the extracted text
            outputElement.innerText = text || "No text found in image.";
        } catch (error) {
            console.error("Error processing image:", error);
            outputElement.innerText = "An error occurred while processing the image.";
        }
    };

    // Read the image file as a data URL
    reader.readAsDataURL(file);
});

