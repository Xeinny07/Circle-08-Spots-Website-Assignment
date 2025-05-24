// Creating the Edit Profile Modal
function createEditProfileModal() {
  // editProfile wrapper
  const editProfile = document.createElement("div");
  editProfile.id = "profileEditModal";
  editProfile.className = "editModal";
  editProfile.style.display = "none";

  // editProfile content
  const editProfileContent = document.createElement("div");
  editProfileContent.className = "editModal-content";

  // Close button
  const closeBtn = document.createElement("span");
  closeBtn.className = "closeEditModal";
  closeBtn.id = "closeEditProfile";
  closeBtn.innerHTML = "&times;";

  // editProfile title
  const title = document.createElement("h2");
  title.textContent = "Edit Profile";

  // Creating Edit Form
  const form = document.createElement("form");
  form.id = "editProfileForm";

  // Form Name (label and input)
  const profileNameLabel = document.createElement("label");
  profileNameLabel.setAttribute("for", "profileNameInput");
  profileNameLabel.textContent = "Name:";
  const profileNameInput = document.createElement("input");
  profileNameInput.type = "text";
  profileNameInput.id = "profileNameInput";
  profileNameInput.name = "name";
  profileNameInput.required = true;
  profileNameInput.disabled = true;

  // form Field (label and input)
  const profileFieldLabel = document.createElement("label");
  profileFieldLabel.setAttribute("for", "profileFieldInput");
  profileFieldLabel.textContent = "Field:";
  const profileFieldInput = document.createElement("input");
  profileFieldInput.type = "text";
  profileFieldInput.id = "profileFieldInput";
  profileFieldInput.name = "field";
  profileFieldInput.required = true;
  profileFieldInput.disabled = true;

  // Form Avatar (label and input)
  const profileAvatarLabel = document.createElement("label");
  profileAvatarLabel.setAttribute("for", "profileAvatarInput");
  profileAvatarLabel.textContent = "Upload Image:";
  const profileAvatarInput = document.createElement("input");
  profileAvatarInput.type = "file";
  profileAvatarInput.id = "profileAvatarInput";
  profileAvatarInput.name = "avatar";

  // Save button
  const saveBtn = document.createElement("button");
  saveBtn.type = "submit";
  saveBtn.className = "save-btn";
  saveBtn.textContent = "Save";

  // Create form
  form.appendChild(profileNameLabel);
  form.appendChild(profileNameInput);
  form.appendChild(profileFieldLabel);
  form.appendChild(profileFieldInput);
  form.appendChild(profileAvatarLabel);
  form.appendChild(profileAvatarInput);
  form.appendChild(document.createElement("br"));
  form.appendChild(saveBtn);

  // Create editProfile content
  editProfileContent.appendChild(closeBtn);
  editProfileContent.appendChild(title);
  editProfileContent.appendChild(form);

  // Create editProfile modal
  editProfile.appendChild(editProfileContent);

  // Display in the body
  document.body.appendChild(editProfile);
}

// Call the function to create and display the editProfile modal
createEditProfileModal();
