const createBook = () => {
    let book = document.querySelectorAll(".bookie");
    book.forEach(function (element) {
        element.innerHTML = `
        
    <div class="book">
     <div class="book_card" >
            <a href="product.html"><div class="book_card_image"><img src="images/images.jpeg" alt="" /></div></a>
            <button class="Add_to_cart">Add to Cart</button>
        </div>
        
        <h1>Lorem ipsum</h1>
        <p>$100</p>
    <div>`;
    });
    
  }
  
  createBook();