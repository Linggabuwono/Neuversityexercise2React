// import logo from "./logo.svg";
import "./App.css";
import cat from "./images/cat.jpg";
import Profile from "./components/Profile";
import Tombol from "./components/Tombol";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div class="flex mx-auto justify-center">
        <Profile
          images={cat}
          nama=" Tian"
          umur="22"
          alamat="Bantul Yogyakarta"
          tinggi="180"
          berat="90"
        />
        <Profile
          images={cat}
          nama=" Lingga"
          umur="22"
          alamat="Bantul Yogyakarta"
          tinggi="180"
          berat="90"
        />
        <Profile
          images={cat}
          nama=" Reza"
          umur="22"
          alamat="Bantul Yogyakarta"
          tinggi="180"
          berat="90"
        />
      </div>
      <div class="text-center">
        <Tombol title="Save" color="blue" />
        <Tombol title="Reset" color="neutral" />
        <Tombol title="Delete" color="red" />
      </div>
    </>
  );
}

export default App;
