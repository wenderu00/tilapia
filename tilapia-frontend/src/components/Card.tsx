import Image from "next/image";
import styles from "./Card.module.css";
interface CardProps {
  imageSrc: string;
  title: string;
  description: string;
  details?: string;
}

const Card = ({ imageSrc, title, description, details }: CardProps) => {
  return (
    <div className={styles["card-container"]}>
      <div className={styles["card-image-wrapper"]}>
        <Image
          src={imageSrc}
          alt={title}
          width={200} // Ajuste o tamanho conforme a sua necessidade
          height={200} // Ajuste o tamanho conforme a sua necessidade
          className={styles["card-image"]}
        />
      </div>
      <div className={styles["card-info-wrapper"]}>
        <h3 className={styles["card-title"]}>{title}</h3>
        <p className={styles["card-description"]}>{description}</p>
        <div className={styles["card-details"]}>{details}</div>
      </div>
    </div>
  );
};

export default Card;
