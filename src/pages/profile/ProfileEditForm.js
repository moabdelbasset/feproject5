import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import { useHistory, useParams } from 'react-router-dom';
import styles from '../../styles/ProfileEditForm.module.css'; // Adjust the path as necessary

const ProfileEditForm = () => {
  const [image, setImage] = useState(null);
  const currentUser = useCurrentUser();
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    // Optionally fetch and set the current profile image if needed
    const fetchProfile = async () => {
      try {
        const { data } = await axios.get(`/profiles/${currentUser?.profile_id}/`);
        // Assuming 'image' field in the response contains the profile image URL
        setImage(data.image);
      } catch (err) {
        console.error("Error fetching profile data", err);
      }
    };

    if (currentUser) {
      fetchProfile();
    }
  }, [currentUser]);

  const handleChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    // Append image file to formData if a new image was selected
    if (image) {
      formData.append('image', image);
    }

    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      };
      await axios.put(`/profiles/${currentUser?.profile_id}/`, formData, config);
      alert('Profile updated successfully!');
      history.push(`/profile/${id}`); // Redirect to profile page or wherever appropriate
    } catch (err) {
      console.error("Error updating profile", err);
    }
  };

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label htmlFor="image-upload" className={styles.label}>
          Choose Profile Picture
        </label>
        <input
          id="image-upload"
          type="file"
          name="image"
          onChange={handleChange}
          accept="image/*"
          className={styles.fileInput}
        />
        <button type="submit" className={styles.submitButton}>
          Update Profile Picture
        </button>
      </form>
    </div>
  );
};

export default ProfileEditForm;
