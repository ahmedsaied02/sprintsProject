const createHeader = () => {
  let header = document.querySelector(".header");

  header.innerHTML = `
    <header>
        <p>
            <a href="#">Sign in</a> | <a href="#">Currency</a> |
            <a href="#"><i class="fa-solid fa-bag-shopping"></i></a>
        </p>
    <h1>
        <img src="images/Vector_1.svg" alt="" /><span>B</span>ook Souls 
    </h1>
    <nav>
      <ul>
        <li><a href="index.html">Home</a></li>
        <li><i class="fa-solid fa-x"></i></li>
        <li><a href="#">Categories</a></li>
        <li><i class="fa-solid fa-x"></i></li>
        <li><a href="#">Author</a></li>
        <li><i class="fa-solid fa-x"></i></li>
        <li><a href="#">Promotions & Rewards</a></li>
      </ul>
      <div class="search_bar">
        <input type="text" placeholder="SEARCH..." />
        <i class="fa-solid fa-magnifying-glass"></i>
      </div>
    </nav>
  </header>
  `;
}
createHeader();
