const createSlide = () => {
    let slide = document.querySelectorAll(".slide");
    slide.forEach(function (element) {
        element.innerHTML = `
        <div class="slide_img_container">
        <img src="images/images.jpeg" alt="" class="slide_image" />
      </div>
      <div class="slide_text">
        <h2>Lorem ipsum</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
          asperiores accusantium natus laborum? Explicabo veniam
          distinctio facere animi molestias deleniti odio aliquid corporis
          omnis neque enim, sit commodi expedita maxime error optio
          necessitatibus non dolor esse? Sit vitae, delectus enim, unde
          voluptas libero officiis, suscipit dolores deleniti facilis
          veritatis molestias.
        </p>
      </div>`;
    });
    
  }
  
  createSlide();