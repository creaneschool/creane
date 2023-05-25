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
        <option value="math_chapter1">01 - Number System</option>
        <option value="math_chapter2">02 - Polynomials</option>
        <option value="math_chapter3">03 - Coordinate Geometry</option>
        <option value="math_chapter4">04 - Introduction to Euclid Geometry</option>
        <option value="math_chapter5">05 - Lines and Angles</option>
        <option value="math_chapter6">06 - Triangles</option>
        <option value="math_chapter7">07 - Quadrilaterals</option>
        <option value="math_chapter8">08 - Areas of Parallelograms and Triangles</option>
        <option value="math_chapter9">09 - Circles</option>
        <option value="math_chapter10">10 - Constructions</option>
        <option value="math_chapter11">11 - Heron’s Formula</option>
        <option value="math_chapter12">12 - Surface Areas and Volumes</option>
        <option value="math_chapter13">13 - StatisticProbability</option>
        <option value="math_chapter14">14 - Probability</option>


      `;
    } else if (selectedSubject === "science") {
      chapterSelect.innerHTML = `
        <option value="Chapter">--Select Chapter--</option> 

        <option value="sci_chapter1">01 - Matter in Our Surroundings</option>
        <option value="sci_chapter2">02 - Is Matter Around Us Pure</option>
        <option value="sci_chapter3">03 - Atoms and Molecules</option>
        <option value="sci_chapter4">04 - Structure of the Atom</option>
        <option value="sci_chapter5">05 - The Fundamental Unit of Life</option>
        <option value="sci_chapter6">06 - Tissues</option>
        <option value="sci_chapter7">07 - Diversity in Living Organisms</option>
        <option value="sci_chapter8">08 - Motion</option>
        <option value="sci_chapter9">09 - Force and Laws of Motion</option>
        <option value="sci_chapter10">10 - Gravitation</option>
        <option value="sci_chapter11">11 - Work, Power And Energy</option>
        <option value="sci_chapter12">12 - Sound</option>
        <option value="sci_chapter13">13 - Why Do we Fall Ill</option>
        <option value="sci_chapter14">14 - Natural Resources</option>
        <option value="sci_chapter15">15 - Improvement in Food Resources</option>

      `;
    }
      else if (selectedSubject === "social") {
      chapterSelect.innerHTML = `
        <option value="Chapter">--Select Chapter--</option>        
        <option value="his_chapter1">Freanch Revolution</option>
        <option value="his_chapter2">Socialism in Europe and the Russian Revolution</option>
        <option value="his_chapter3">Nazism and the Rise of Hitler</option>
        <option value="his_chapter4">Forest Society and Colonialism</option>
        <option value="his_chapter5">Pastoralists in the Modern World</option>
        

      `;
    } 
      else if (selectedSubject === "hindi") {
      chapterSelect.innerHTML = `
        <option value="Chapter">--Select Chapter--</option>        
        <option value="hin_chapter1">01 - दो बैलों की कथा</option>
        <option value="hin_chapter1">02 - ल्हासा की ओरा</option>
        <option value="hin_chapter1">03 - उपभोक्तावाद की संस्कृति </option>
        <option value="hin_chapter1">04 - साँवले सपनों की याद</option>
        <option value="hin_chapter1">05 - नाना साहब की पुत्री देवी मैना को भस्म कर दिया गयाा</option>
      `;
    } 
    else if (selectedSubject === "english") {
      chapterSelect.innerHTML = `
        <option value="Chapter">--Select Chapter--</option>        
        <option value="eng_chapter1">01 - The Fun They Had</option>
        <option value="eng_chapter2">02 - The Road Not Taken [Poem]</option>
        <option value="eng_chapter3">03 - The Sound of Music</option>
        <option value="eng_chapter4">04 - Wind [Poem]</option>
        <option value="eng_chapter5">05 - The Little Girl</option>
        <option value="eng_chapter6">06 - Rain On The Roof [Poem]</option>
        <option value="eng_chapter7">07 - A Truly Beautiful Mind</option>
        <option value="eng_chapter8">08 - The Lake Isle Of Innisfree [Poem]</option>
        <option value="eng_chapter9">09 - The Snake and The Mirror</option>
        <option value="eng_chapter10">10 - A Legend Of The Northland [Poem]</option>
        <option value="eng_chapter11">11 - My Childhood</option>
        <option value="eng_chapter12">12 - No Men Are Foreign [Poem]</option>
        <option value="eng_chapter13">13 - Packing</option>
        <option value="eng_chapter14">14 - Reach for the Top</option>
        <option value="eng_chapter15">15 - On Killing A Tree [Poem]</option>
        <option value="eng_chapter16">16 - The Bond of Love</option>
        <option value="eng_chapter17">17 - The Snake Trying [Poem]Kathmandu</option>
        <option value="eng_chapter18">18 - Kathmandu</option>
        <option value="eng_chapter19">19 - A Slumber Did My Spirit Seal [Poem]</option>
        <option value="eng_chapter20">20 - If I Were You</option>
      `;
    } 

    else if (selectedSubject === "ai") {
      chapterSelect.innerHTML = `
        <option value="chapter">--Select Chapter--</option>        
        <option value="ai_chapter1">Intoduction to AI</option>
      `;
    } 
    else {
      chapterSelect.innerHTML = `<option value="Chapter">Chapter</option>`;
    }
  }

  function getNotes() {
    const selectedChapter = chapterSelect.value;
    const selectedSubject = subjectSelect.value;
    if(selectedSubject === 'ai' && selectedChapter === 'ai_chapter1'){
      window.open('ai_chapter1.pdf');
    }
    else if(selectedSubject === 'english' && selectedChapter === 'eng_chapter1'){
      window.open('https://drive.google.com/file/d/1fNrdJkMWXPsRNL0lpuBYwiYO_OFH1JwW/preview');
    }
     else if(selectedSubject === 'english' && selectedChapter === 'eng_chapter2'){
      window.open('eng_chapter2.pdf');
    }
    else if(selectedSubject === 'english' && selectedChapter === 'eng_chapter3'){
      window.open('eng_chapter3.pdf');
    }
    else if(selectedSubject === 'english' && selectedChapter === 'eng_chapter4'){
      window.open('eng_chapter4.pdf');
    }
        else if(selectedSubject === 'english' && selectedChapter === 'eng_chapter5'){
      window.open('eng_chapter5.pdf');
    }
    
    else if(selectedSubject === 'english' && selectedChapter === 'eng_chapter6'){
      window.open('eng_chapter6.pdf');
    }
    
    else if(selectedSubject === 'english' && selectedChapter === 'eng_chapter7'){
      window.open('eng_chapter7.pdf');
    }
    
    else if(selectedSubject === 'english' && selectedChapter === 'eng_chapter8'){
      window.open('eng_chapter8.pdf');
    }
    
    else if(selectedSubject === 'english' && selectedChapter === 'eng_chapter9'){
      window.open('eng_chapter9.pdf');
    }
    
    else if(selectedSubject === 'english' && selectedChapter === 'eng_chapter10'){
      window.open('eng_chapter10.pdf');
    }
    
    else if(selectedSubject === 'english' && selectedChapter === 'eng_chapter11'){
      window.open('eng_chapter11.pdf');
    }
    
    else if(selectedSubject === 'english' && selectedChapter === 'eng_chapter12'){
      window.open('eng_chapter12.pdf');
    }
    
    else if(selectedSubject === 'english' && selectedChapter === 'eng_chapter13'){
      window.open('eng_chapter13.pdf');
    }
    
    else if(selectedSubject === 'english' && selectedChapter === 'eng_chapter14'){
      window.open('eng_chapter14.pdf');
    }
    else if(selectedSubject === 'english' && selectedChapter === 'eng_chapter15'){
      window.open('eng_chapter15.pdf');
    }
    else if(selectedSubject === 'english' && selectedChapter === 'eng_chapter16'){
      window.open('eng_chapter16.pdf');
    }
    else if(selectedSubject === 'english' && selectedChapter === 'eng_chapter17'){
      window.open('eng_chapter17.pdf');
    }
    else if(selectedSubject === 'english' && selectedChapter === 'eng_chapter18'){
      window.open('eng_chapter18.pdf');
    }
    else if(selectedSubject === 'english' && selectedChapter === 'eng_chapter19'){
      window.open('eng_chapter19.pdf');
    }
    else if(selectedSubject === 'english' && selectedChapter === 'eng_chapter20'){
      window.open('eng_chapter20.pdf');
    }

    // Science ------------------------------------------------------

    else if(selectedSubject === 'science' && selectedChapter === 'sci_chapter1'){
      window.open('sci_chapter1.pdf');
    }
    else if(selectedSubject === 'science' && selectedChapter === 'sci_chapter2'){
      window.open('sci_chapter2.pdf');
    }
    else if(selectedSubject === 'science' && selectedChapter === 'sci_chapter3'){
      window.open('sci_chapter3.pdf');
    }
    else if(selectedSubject === 'science' && selectedChapter === 'sci_chapter4'){
      window.open('sci_chapter4.pdf');
    }
    else if(selectedSubject === 'science' && selectedChapter === 'sci_chapter5'){
      window.open('sci_chapter5.pdf');
    }
    else if(selectedSubject === 'science' && selectedChapter === 'sci_chapter6'){
      window.open('sci_chapter6.pdf');
    }
    else if(selectedSubject === 'science' && selectedChapter === 'sci_chapter7'){
      window.open('sci_chapter7.pdf');
    }
    else if(selectedSubject === 'science' && selectedChapter === 'sci_chapter8'){
      window.open('sci_chapter8.pdf');
    }
    else if(selectedSubject === 'science' && selectedChapter === 'sci_chapter9'){
      window.open('sci_chapter9.pdf');
    }
    else if(selectedSubject === 'science' && selectedChapter === 'sci_chapter10'){
      window.open('sci_chapter10.pdf');
    }
    else if(selectedSubject === 'science' && selectedChapter === 'sci_chapter11'){
      window.open('sci_chapter11.pdf');
    }
    else if(selectedSubject === 'science' && selectedChapter === 'sci_chapter12'){
      window.open('sci_chapter12.pdf');
    }
    else if(selectedSubject === 'science' && selectedChapter === 'sci_chapter13'){
      window.open('sci_chapter13.pdf');
    }
    else if(selectedSubject === 'science' && selectedChapter === 'sci_chapter14'){
      window.open('sci_chapter14.pdf');
    }
    else if(selectedSubject === 'science' && selectedChapter === 'sci_chapter15'){
      window.open('sci_chapter15.pdf');
    }
    
    // Maths------------------------------------------------------------------

    else if(selectedSubject === 'maths' && selectedChapter === 'math_chapter1'){
      window.open('math_chapter1.pdf');
    }
    else if(selectedSubject === 'maths' && selectedChapter === 'math_chapter2'){
      window.open('math_chapter2.pdf');
    }
    else if(selectedSubject === 'maths' && selectedChapter === 'math_chapter3'){
      window.open('math_chapter3.pdf');
    }
    else if(selectedSubject === 'maths' && selectedChapter === 'math_chapter4'){
      window.open('math_chapter4.pdf');
    }
    else if(selectedSubject === 'maths' && selectedChapter === 'math_chapter5'){
      window.open('math_chapter5.pdf');
    }
    else if(selectedSubject === 'maths' && selectedChapter === 'math_chapter6'){
      window.open('math_chapter6.pdf');
    }
    else if(selectedSubject === 'maths' && selectedChapter === 'math_chapter7'){
      window.open('math_chapter7.pdf');
    }
    else if(selectedSubject === 'maths' && selectedChapter === 'math_chapter8'){
      window.open('math_chapter8.pdf');
    }
    else if(selectedSubject === 'maths' && selectedChapter === 'math_chapter9'){
      window.open('math_chapter9.pdf');
    }
    else if(selectedSubject === 'maths' && selectedChapter === 'math_chapter10'){
      window.open('math_chapter10.pdf');
    }
    else if(selectedSubject === 'maths' && selectedChapter === 'math_chapter11'){
      window.open('math_chapter11.pdf');
    }
    else if(selectedSubject === 'maths' && selectedChapter === 'math_chapter12'){
      window.open('math_chapter12.pdf');
    }
    else if(selectedSubject === 'maths' && selectedChapter === 'math_chapter13'){
      window.open('math_chapter13.pdf');
    }
    else if(selectedSubject === 'maths' && selectedChapter === 'math_chapter14'){
      window.open('math_chapter14.pdf');
    }
    // Hindi 
     else if(selectedSubject === 'hindi' && selectedChapter === 'hin_chapter1'){
      window.open('hin_chapter1.pdf');
    }
  }
  subjectSelect.addEventListener("change", updateChapterOptions);

  if (notesButton) {
    notesButton.addEventListener("click", getNotes);
  }
});
