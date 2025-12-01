<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Space Image Share</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>

<header>
    <h1>Galactic Pics</h1>
    <p>Upload your telescope photos and share the wonders of the universe.</p>
</header>

<main>

    <section class="upload-section">
        <h2>Upload Your Space Image</h2>

        <form aria-label="Upload space image form">
            <label for="imageUpload">Choose an image:</label>
            <input type="file" id="imageUpload" accept="image/*">

            <label for="imageDescription">Image Description (for accessibility):</label>
            <textarea id="imageDescription" rows="3" placeholder="Describe the image..."></textarea>

            <button type="submit">Upload</button>
        </form>
    </section>

    <section class="gallery">
        <h2>Latest Shared Images</h2>

        <!-- Example gallery images -->
        <div class="image-card">
            <img src="https://via.placeholder.com/300x200" alt="Sample placeholder image of space">
            <p>A beautiful sample space image.</p>
        </div>

        <div class="image-card">
            <img src="https://via.placeholder.com/300x200" alt="Placeholder of a galaxy">
            <p>A spiral galaxy view.</p>
        </div>
    </section>

</main>

<footer>
    <p>© 2025 Galactic Pics</p>
</footer>

</body>
</html>