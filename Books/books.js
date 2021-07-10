$("button.give").on("click", function() {

  var n = Math.floor(Math.random() * 10) + 1; // random
  var book_img = "books_images/book" + n + ".jpg"; // image
  var loc = document.querySelector("img.bb")
  loc.setAttribute("src", book_img);

  if (n === 1)
    $("#showBook").wrap("<a href=https://www.amazon.in/Art-Happiness-10th-Anniversary-Handbook/dp/1594488894 target='_blank' ></a>");

  else if (n === 2)
    $("#showBook").wrap("<a href=https://www.amazon.in/Atomic-Habits-James-Clear/dp/1847941834/ref=sr_1_1?dchild=1&keywords=Atomic+Habits&qid=1625407304&s=books&sr=1-1 target='_blank' ></a>");

  else if (n === 3)
    $("#showBook").wrap("<a href=https://www.amazon.in/Rich-Dad-Poor-Middle-Updates/dp/1612680194/ref=sr_1_3?dchild=1&keywords=Rich+Dad+poor+Dad&qid=1625407337&s=books&sr=1-3 target='_blank' ></a>");

  else if (n === 4)
    $("#showBook").wrap("<a href=https://www.amazon.in/Think-Grow-Rich-21st-CENTURY/dp/9389931525/ref=sr_1_4?dchild=1&keywords=Think+and+Grow+Rich+by+Napoleon+Hill&qid=1625407445&s=books&sr=1-4 target='_blank' ></a>");

  else if (n === 5)
    $("#showBook").wrap("<a href=https://www.amazon.in/Friend-Influence-People-Paperback-Carnegie/dp/B0946FNNX8/ref=pd_sbs_6/259-8461375-4593344?pd_rd_w=gwGwt&pf_rd_p=950901b9-b71e-4c33-9fc5-41ec6db58ad1&pf_rd_r=VW106H2698J8QHG46KM7&pd_rd_r=f6596495-a278-4e6a-b68f-1efd31d7d357&pd_rd_wg=zaG7a&pd_rd_i=B0946FNNX8&psc=1 target='_blank' ></a>");

  else if (n === 6)
    $("#showBook").wrap("<a href=https://www.amazon.in/Power-Habit-Why-What-Change/dp/1847946240/ref=sr_1_3?dchild=1&keywords=The+Power+of+Habit&qid=1625407561&s=books&sr=1-3 target='_blank' ></a>");

  else if (n === 7)
    $("#showBook").wrap("<a href=https://www.amazon.in/Harry-Potter-Philosophers-Stone-Rowling/dp/1408855658/ref=sr_1_1?dchild=1&keywords=Harry+Potter+and+the+Philosopher%E2%80%99s+Stone+by+J.K.+Rowling&qid=1625407594&s=books&sr=1-1 target='_blank' ></a>");

  else if (n === 8)
    $("#showBook").wrap("<a href=https://www.amazon.in/Mrutyunjay-Hardcover-Shivaji-Sawant/dp/B07KM6GV2N/ref=sr_1_1?dchild=1&keywords=Mrutyunjay+-+shivaji+sawant&qid=1625407659&s=books&sr=1-1 target='_blank' ></a>");

  else if (n === 9)
    $("#showBook").wrap("<a href=https://www.amazon.in/Stumbling-Happiness-Vintage-Daniel-Gilbert/dp/1400077427/ref=sr_1_1?dchild=1&keywords=Stumbling+on+Happiness+%E2%80%93+Daniel+Gilbert&qid=1625407716&s=books&sr=1-1 target='_blank' ></a>");

  else if (n === 10)
    $("#showBook").wrap("<a href=https://www.amazon.in/Alchemist-Paulo-Coelho/dp/8172234988/ref=sr_1_2?dchild=1&keywords=The+Alchemist-+Paulo+Cohelo&qid=1625407776&s=books&sr=1-2 target='_blank' ></a>");

  document.querySelector("#showText").innerHTML = "To Buy - Click On Book";

});
