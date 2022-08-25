const createBook = () => {
    let book = document.querySelectorAll(".bookie");
    book.forEach(function (element) {
        element.innerHTML = `
    <div class="book">
        <div class="book_card" class="book_card">
            <div class="book_card_image"><img src="#" alt="" /></div>
            <button class="Add_to_cart">Add to Cart</button>
        </div>
        <h1>Lorem ipsum</h1>
        <p>$100</p>
    <div>`;
    });
    
  }
  
  createBook();