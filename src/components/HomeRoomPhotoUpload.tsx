import Icon from "@/components/Icon";
import styles from "./HomeRoomPhotoUpload.module.css";

export default function HomeRoomPhotoUpload({ idPrefix, context = "room" }: { idPrefix: string; context?: "room" | "surface" }) {
  const purposeId = `${idPrefix}-photo-purpose`;
  const statusId = `${idPrefix}-photo-status`;

  const room = context === "room";
  return <aside className={styles.upload} aria-label={room ? "Your own room photo" : "Your own project photo"}>
    <div className={styles.copy}>
      <h2>{room ? "Try colours in your own room" : "Picture your own project"}</h2>
      <p id={purposeId}>{room ? "Use a room photo to preview paint on your walls." : "Use a photo of your space or surface to explore a finish."}</p>
    </div>
    <div className={styles.actions}>
      <button type="button" disabled aria-describedby={`${purposeId} ${statusId}`}>
        <Icon name="upload" size={17} />
        <span>{room ? "Upload room photo" : "Upload project photo"}</span>
      </button>
      <span className={styles.status} id={statusId}>Coming soon</span>
    </div>
  </aside>;
}
