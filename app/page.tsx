import MapIntegration from "./component/Maplocation";
import Navbar from "./component/Navbar";
import PlaceCard from "./component/PlaceCard";
import VideoPlayer from "./component/VideoPlayer";
import TransferForm from "./component/TransferForm";
import Footer from "./component/Footer";
import Main from "./component/Main";

export default function Home() {
  return (
    <>
      <Navbar />
      
      <Main />      

      {/* Places Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              ສະຖານທີ່ທ່ອງທ່ຽວຍອດນິຍົມ
            </h2>
            <div className="w-20 h-1 bg-slate-400 mx-auto rounded-full"></div>
          </div>
          <PlaceCard />
          <MapIntegration />
          <VideoPlayer/>
        </div>
          <TransferForm />
      </section>
          <Footer />
    </>
  );
}