const createItem = () => {
  let book = document.querySelectorAll(".cart_book");
  book.forEach(function (element) {
    element.innerHTML = `
        <div class="item-container">
                <div class="book_card">
                    <a href="product.html">
                        <div class="book_card_image"><img src="images/images.jpeg" alt="" /></div>
                    </a>
                </div>
                <div class="description">
                    <h1>Lorem Ipsum</h1>
                    <p>Volume 1</p>
                </div>
                <div class="price">
                    <p>$999</p>
                </div>
                <div class="delete">
                    
                        <button><i class='fa fa-trash' style="font-size:35px;color:#BA2F48"></i> </button>
                    
                </div>
        </div>`;
  });
};

createItem();
