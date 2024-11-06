export async function changeBackground() {
  console.log("Changing background image");

  const siteBody = document.querySelector('.ss-site .body') as HTMLElement;
  // [TODO] Remove key from unsplash
  // [TODO] Deploy with github action
  // [TODO] Move secret to env
  // const accessKey = 'YOUR_ACCESS_KEY'; // Replace with your Unsplash Access Key
  const accessKey = 't1mbpxmurcKa9E9rVOf6E-gcoGKPtW5tnCexrOgETeE';

  try {
    const response = await fetch(`https://api.unsplash.com/photos/random?orientation=landscape&client_id=${accessKey}`);
    if (!response.ok) {
      throw new Error(`Error fetching image: ${response.statusText}`);
    }

    const data = await response.json();
    const imageUrl = data.urls.regular;

    siteBody.style.backgroundImage = `url('${imageUrl}')`;
  } catch (error) {
    console.error('Error:', error);
  }
}