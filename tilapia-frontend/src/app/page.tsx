import Card from "@/components/Card";
import styles from "./Home.module.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
  const cardData = {
    imageSrc: "/tilapia-foto.webp", // Adicione esta imagem na pasta `public`
    title: "Título do Card",
    description:
      "Esta é uma breve descrição do conteúdo do card. Aqui você pode colocar informações relevantes.",
    details: "Detalhes adicionais, como data, autor ou categoria.",
  };
  return (
    <div className={styles["flex-container"]}>
      <Header />
      <main className={styles.container}>
        <h1>minha página sobre tilápias</h1>
        <Card
          imageSrc={cardData.imageSrc}
          title={cardData.title}
          description={cardData.description}
          details={cardData.details}
        />
      </main>
      <Footer />
    </div>
  );
}
