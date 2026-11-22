export default function EditProfile() {
  return (
    <form
      className="popup__form"
      name="profile-form"
      id="edit-profile-form"
      noValidate
    >
      <label className="popup__field">
        <input
          className="popup__input popup__input_type_name"
          name="name"
          placeholder="Nombre"
          type="text"
          required
          minLength="2"
          maxLength="40"
        />
        <span className="name-input-error popup__input-error"></span>
      </label>

      <label className="popup__field">
        <input
          className="popup__input popup__input_type_description"
          name="description"
          placeholder="Acerca de mí"
          type="text"
          required
          minLength="2"
          maxLength="200"
        />
        <span className="description-input-error popup__input-error"></span>
      </label>

      <button className="button popup__button" type="submit" disabled>
        Guardar
      </button>
    </form>
  );
}
