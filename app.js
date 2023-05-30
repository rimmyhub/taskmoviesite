const options = {
  method: 'GET',
  headers: {
  accept: 'application/json',
  Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyODgwYmIzNjA5MDMyMGY5MzJjMDM4MzdhOTFlYzQ3MCIsInN1YiI6IjY0NzU2MWJiNjc0M2ZhMDEzNmVlYTM4YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Wqy-TYuti_eNtAxsJ2ogjiehKSjfEJOJlQijhu9u8ys'
  }
  };


let rows;

  fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1")
  .then((response) => response.json())
  .then((data) => {
    rows = data["results"]
    let temp_html = rows.map(
      (a) =>
        `<li class="list">
            <img src="https://image.tmdb.org/t/p/original/${a.poster_path}"class="card-image" alt="...">
            <div = "card-body">
            <h2 class="card-title">${a.title}</h2>
            <p class="card-overview">${a.overview}</p>
            <p class="card-average">${a.vote_average}</p>
        </li>`
    );

    document.querySelector('#list').insertAdjacentHTML("beforeend", temp_html)
    console.log(rows)
  })

//검색기능
// const list = document.getElementById('list');

// function showList(val=''){
//   list.innerHTML = '';
//   const res = rows.forEach(rows =>{
//     if(rows.title.includes(val)){
//       const li = document.createElement('li');
//       li.innerHTML = `
//        <p>${a.title}</p>
//        <p>${a.overview}</p>
//        <p>${a.vote_average}</p>
//       `
//       list.appendChild(li);
//     }
//   })
// }

// const searchInput = document.getElementById("search");
// const searchBtn = document.getElementById("searchBtn");

// searchBtn.addEventListener("click",(e) => {
//   e.preventDefault();
//   const val = searchInput.value;
//   console.log(val)
//   showList(val);
// });



// function fetchAndPrintJson(url1) {
//   // 매개변수로 받은 url 주소의 데이터를 fetch 받아와서 출력하는 함수를 작성하세요.
//   fetch(url1,options)
//     .then((res) => res.json())
//     .then((data) => {
//       let rows = JSON.parse(data['results'])
//       console.log ('안녕')
//       rows.forEach((a) => {
//         let title = a["original_title"];
//         let overview = a["noverview"];
//         let image = a["poster_path"];
//         let average = a["vote_average"];

//         let temp_html = `<li>
//                       <img src="${image}"class="card-img-top" alt="...">
//                           <h2 class="card-title">${title}</h2>
//                           <p class="card-overview">${overview}</p>
//                           <p class="card-average">${average}</p>
//                       </li>
//               </div>`;
//         $("#cards").append(temp_html);
//       });
//     });
//   console.log("제발되라");
// }
// fetchAndPrintJson(
//   "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1"
// );

// fetch(
//   "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1"
// )
//   .then((res) => res.json())
//   .then((data) => {
//     $('#cards').empty()
//     let rows = data["movies"];
//     rows.forEach((a) => {
//       let original_name = a["title"];
//       let noverview = a["overview"];
//       let poster_path = a["image"];
//       let vote_average = a["average"];

//       let temp_html = `<li>
//                   <img src="${image}"class="card-img-top" alt="...">
//                       <h2 class="card-title">${title}</h2>
//                       <p class="card-overview">${overview}</p>
//                       <p class="card-average">${average}</p>
//                   </li>
//           </div>`;
//       $("#cards").append(temp_html);
//     });
//   });

// function fetchAndPrintJson(https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1) {
//   // 매개변수로 받은 url 주소의 데이터를 fetch 받아와서 출력하는 함수를 작성하세요.
//     fetch(https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1).then((res) => res.json()
//     ).then(data=> {
//       id: 1,
//       title: "백두산",
//       overview: "세상이 멸망함",
//       poster_path: "이미지 경로",
//       vote_average: "별점 5점 만점",
//      })
