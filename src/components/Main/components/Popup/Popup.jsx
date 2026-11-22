export default function Popup(props) {
  // los hijos son el contenido de la ventana emergente
  const { title, onClose, children } = props;
  return (
    <div className={`popup ${children ? "popup_is-opened" : ""}`}>
      <div
        className={`popup__content ${
          !title ? "popup__content_content_image" : ""
        }`}
      >
        <button
          aria-label="Cerrar ventana emergente"
          className="popup__close"
          type="button"
          onClick={onClose}
        ></button>
        {title && <h3 className="popup__title">{title}</h3>}
        {children}
      </div>
    </div>
  );
}
