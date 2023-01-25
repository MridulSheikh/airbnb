import Banner from "@/components/Banner";
import Explore from "@/components/Explore";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LargCard from "@/components/LargCard";
import Live from "@/components/Live";

export default function Home({explore, live} : any) {
  return (
   <div>
      <Header />
      <Banner />
      <main className=" max-w-7xl mx-auto px-8 sm:px-16">
          <Explore explore={explore} />
          <Live data={live} />
          <LargCard
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          description = "Wishsts curated by Airbnb"
          buttonText= "Get Inspired"
          />
          <Footer />
      </main>
   </div>
  )
}

export async function getStaticProps(){
  const exploreData = await fetch('https://www.jsonkeeper.com/b/4G1G');
  const data = await exploreData.json();
  const cardData = await fetch('https://www.jsonkeeper.com/b/VHHT');
  const liveData = await cardData.json();

  return{
      props:{
          explore : data,
          live : liveData
      }
  }
}