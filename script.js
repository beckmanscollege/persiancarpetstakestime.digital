  // add click listener to the button
      document
        .querySelector("h1")
        .addEventListener("click", colorButtonListener);

      function colorButtonListener() {
        document.body.classList.toggle("color");
      } 