// 영화 API가져와서 map함수로 영화 아이디, 개요, 타이틀, 평점 등 끌어왔습니다.
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4M2JmMDI5ZTBhODE5OTFlZjNjMDNkMTdjZWY0ZGY4MyIsInN1YiI6IjY0NzFkM2VhODgxM2U0MDBhOGY0NTk0MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Zul1ZGDeSjFFV13VLsDgb1aNx5CLTYX7T0mJPBmmxPo",
  },
};

const section = document.querySelector("#mainSection");

let row = []

fetch(
  "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
  options
)
  .then((response) => response.json())
  .then((data) => {
    row.push(data['results'])
    console.log(data)
    rows = data["results"];
    let temp_html = rows.map(
      (a) =>
        `<li class="list" onclick="showAlert(this)" id=${a.id}>
            <img src="https://image.tmdb.org/t/p/original/${a.poster_path}"class="card-image" alt="...">
            <div = "card-body">
            <h2 class="card-title">${a.title}</h2>
            <p class="card-overview">${a.overview}</p>
            <p class="card-average">${a.vote_average}</p>
        </li>`
    );

    const jointemp = temp_html.join("");
    document.querySelector("#list").insertAdjacentHTML("beforeend", jointemp);
  });

// 각 영화 리스트 선택 시 alert 팝업에 영화 아이디 노출하는 코드입니다.
function showAlert(show) {
  let id = show.id;
  alert(`영화 아이디는 ${id} 입니다`);
}

// 검색 기능 동작, filter안에 데이터를 삽입하여 타이틀을 검색할 수 있게 했습니다.
//대 소문자 구분 기능을 구현하지 못했습니다.
function search (){
  let data = row[0]
  let input = document.querySelector('#search')
  let inputValue = input.value;
  let filterData = data.filter(row => row.title.includes(inputValue))
  let html_temp = ''
  filterData.forEach(a => {
    html_temp = html_temp +
     `<li class="list" onclick="showAlert(this)" id=${a.id}>
         <img src="https://image.tmdb.org/t/p/original/${a.poster_path}"class="card-image" alt="...">
         <div = "card-body">
         <h2 class="card-title">${a.title}</h2>
         <p class="card-overview">${a.overview}</p>
         <p class="card-average">${a.vote_average}</p>
     </li>`
    
  });
  let ulEl = document.querySelector("#list")
  ulEl.innerHTML = html_temp
} 

searchBtn.addEventListener("click", search)

