document.addEventListener("DOMContentLoaded", function() {
  const subjectSelect = document.getElementById("subject");
  const chapterSelect = document.getElementById("chapter");
  const notesDiv = document.getElementById("notes");
  const notesButton = document.getElementById("notesButton");

  function updateChapterOptions() {
    const selectedSubject = subjectSelect.value;
    if (selectedSubject === "maths") {
      chapterSelect.innerHTML = `
        <option value="Chapter">--Select Chapter--</option>        
        <option value="chapter1">Number System</option>
        <option value="chapter2">Polynomials</option>
        <option value="chapter3">Coordinate Geometry</option>
        <option value="chapter4">Introduction to Euclid Geometry</option>
        <option value="chapter5">Lines and Angles</option>
        <option value="chapter6">Triangles</option>
        <option value="chapter7">Quadrilaterals</option>
        <option value="chapter8">Areas of Parallelograms and Triangles</option>
        <option value="chapter9">Circles</option>
        <option value="chapter10">Constructions</option>
        <option value="chapter11">Heron’s Formula</option>
        <option value="chapter12">Surface Areas and Volumes</option>
        <option value="chapter13">StatisticProbability</option>
        <option value="chapter14">Probability</option>


      `;
    } else if (selectedSubject === "science") {
      chapterSelect.innerHTML = `
        <option value="Chapter">--Select Chapter--</option> 

        <option value="chapter4">Matter in Our Surroundings</option>
        <option value="chapter4">Is Matter Around Us Pure</option>
        <option value="chapter4">Atoms and Molecules</option>
        <option value="chapter4">Structure of the Atom</option>
        <option value="chapter4">The Fundamental Unit of Life</option>
        <option value="chapter4">Tissues</option>
        <option value="chapter4">Diversity in Living Organisms</option>
        <option value="chapter4">Motion</option>
        <option value="chapter4">Force and Laws of Motion</option>
        <option value="chapter4">Gravitation</option>
        <option value="chapter4">Work, Power And Energy</option>
        <option value="chapter4">Sound</option>
        <option value="chapter4">Why Do we Fall Ill</option>
        <option value="chapter4">Natural Resources</option>
        <option value="chapter4">Improvement in Food Resources</option>

      `;
    }
      else if (selectedSubject === "social") {
      chapterSelect.innerHTML = `
        <option value="Chapter">--Select Chapter--</option>        
        <option value="Chapter">Freanch Revolution</option>
        <option value="Chapter">Socialism in Europe and the Russian Revolution</option>
        <option value="Chapter">Nazism and the Rise of Hitler</option>
        <option value="Chapter">Forest Society and Colonialism</option>
        <option value="Chapter">Pastoralists in the Modern World</option>
        

      `;
    } 
      else if (selectedSubject === "hindi") {
      chapterSelect.innerHTML = `
        <option value="Chapter">--Select Chapter--</option>        
        <option value="Chapter1">दो बैलों की कथा</option>
      `;
    } 
    else if (selectedSubject === "english") {
      chapterSelect.innerHTML = `
        <option value="Chapter">--Select Chapter--</option>        
        <option value="chapter1">The Fun They Had</option>
        <option value="chapter1">The Road Not Taken [Poem]</option>
        <option value="chapter1">The Sound of Music</option>
        <option value="chapter1">Wind [Poem]</option>
        <option value="chapter1">The Little Girl</option>
        <option value="chapter1">Rain On The Roof [Poem]</option>
        <option value="chapter1">A Truly Beautiful Mind</option>
        <option value="chapter1">The Lake Isle Of Innisfree [Poem]</option>
        <option value="chapter1">The Snake and The Mirror</option>
        <option value="chapter1">A Legend Of The Northland [Poem]</option>
        <option value="chapter1">My Childhood</option>
        <option value="chapter1">No Men Are Foreign [Poem]</option>
        <option value="chapter1">Packing</option>
        <option value="chapter1">Reach for the Top</option>
        <option value="chapter1">On Killing A Tree [Poem]</option>
        <option value="chapter1">The Bond of Love</option>
        <option value="chapter1">The Snake Trying [Poem]Kathmandu</option>
        <option value="chapter1">Kathmandu</option>
        <option value="chapter1">A Slumber Did My Spirit Seal [Poem]</option>
        <option value="chapter1">If I Were You</option>
      `;
    } 

    else if (selectedSubject === "ai") {
      chapterSelect.innerHTML = `
        <option value="chapter">--Select Chapter--</option>        
        <option value="chapter1">Intoduction to AI</option>
      `;
    } 
    else {
      chapterSelect.innerHTML = `<option value="Chapter">Chapter</option>`;
    }
  }

  function getNotes() {
    const selectedChapter = chapterSelect.value;
    const selectedSubject = subjectSelect.value;
    if(selectedSubject == 'ai' && selectedChapter == 'chapter1'){
      window.open('Intro_to_ai.pdf');
    }
    else if(selectedSubject == 'english' && selectedChapter == 'chapter1'){
      window.open('q.pdf');
    };
  }
  subjectSelect.addEventListener("change", updateChapterOptions);

  if (notesButton) {
    notesButton.addEventListener("click", getNotes);
  }
});
