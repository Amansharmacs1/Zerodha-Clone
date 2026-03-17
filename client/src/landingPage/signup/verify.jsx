import axios from "axios";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Verify() {

  const { token } = useParams();
  const navigate = useNavigate();

  useEffect(() => {

    const verifyEmail = async () => {

      try {

        const res = await axios.post(
          "http://localhost:8000/user/verify",
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        );

        if (res.data.success) {

          alert("Email verified successfully");

          navigate("/login");

        }

      } catch (error) {

        alert("Verification failed");

      }

    };

    verifyEmail();

  }, [token, navigate]);

}

export default Verify;