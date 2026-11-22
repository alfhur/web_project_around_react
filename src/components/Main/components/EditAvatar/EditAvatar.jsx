export default function EditAvatar() {
  return (
    <form
      className="popup__form"
      name="avatar-form"
      id="edit-avatar-form"
      noValidate
    >
      <label className="popup__field">
        <input
          className="popup__input popup__input_type_url"
          name="link"
          placeholder="Enlace a la foto de perfil"
          required
          type="url"
        />
        <span className="link-input-error popup__input-error"></span>
      </label>

      <button className="button popup__button" type="submit" disabled>
        Guardar
      </button>
    </form>
  );
}
