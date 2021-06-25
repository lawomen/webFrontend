import * as Yup from "yup";
import { Formik, Field, Form } from "formik";
import axios from "axios";
import { useTranslation } from "next-i18next";
import contactStyle from "../styles/formikform.module.css";


function FormikForm() {
  const { t } = useTranslation("contact");

  return (
    <Formik
      initialValues={{ name: "", email: "", note: "" }}
      onSubmit={async (formsData, { setSubmitting, resetForm }) => {
        setSubmitting(true);

        const strapiData = await axios.post(
          `${process.env.NEXT_PUBLIC_CMS_URL}/auth/local`,
          {
            identifier: process.env.NEXT_PUBLIC_CMS_USER,
            password: process.env.NEXT_PUBLIC_CMS_PASS,
          }
        );

        const res = await axios.post(
          `${process.env.NEXT_PUBLIC_CMS_URL}/inquiries`,
          {
            name: formsData.name,
            email: formsData.email,
            note: formsData.note,
          },
          {
            headers: {
               Authorization: `Bearer ${strapiData.data.jwt}`,
            },
          }
        );

        resetForm();
        setSubmitting(false);
      }}
      validationSchema={Yup.object().shape({
        name: Yup.string()
          .min(3, t("charError"))
          .required(t("requiredError")),
        email: Yup.string()
          .email(t("emailError"))
          .required(t("requiredError")),
        note: Yup.string().required(t("requiredError")),
      })}
    >
      {({ isSubmitting, errors, touched }) => (
        <Form className={contactStyle.form}>
          <div className={contactStyle.fieldGroup}>
            <label className={contactStyle.fieldLabel} htmlFor="nameField">{t("name")}</label>
            <Field
              type="text"
              name="name"
              id="nameField"
              className={contactStyle.textInput}
              aria-invalid={errors.name && touched.name ? 'true' : null}
              aria-describedby={errors.name && touched.name ? 'nameError' : null}
            />
            {errors.name && touched.name ? (
              <p id="nameError" className={contactStyle.errorText}>{errors.name}</p>
            ) : (
              <p className={contactStyle.errorText}></p>
            )}
          </div>

          <div className={contactStyle.fieldGroup}>
            <label className={contactStyle.fieldLabel} htmlFor="emailField">{t("email")}</label>
            <Field
              type="email"
              name="email"
              id="emailField"
              className={contactStyle.textInput}
              aria-invalid={errors.email && touched.email ? 'true' : null}
              aria-describedby={errors.email && touched.email ? 'emailError' : null}
            />
            {errors.email && touched.email ? (
              <p id="emailError" className={contactStyle.errorText}>{errors.email}</p>
            ) : (
              <p className={contactStyle.errorText}></p>
            )}
          </div>
          <div className={contactStyle.fieldGroup}>
            <label className={contactStyle.fieldLabel} htmlFor="noteField">{t("note")}</label>
            <Field
              type="text"
              as="textarea"
              name="note"
              id="noteField"
              className={contactStyle.textareaInput}
              aria-invalid={errors.note && touched.note ? 'true' : null}
              aria-describedby={errors.note && touched.note ? 'noteError' : null}
            />
            {errors.note && touched.note ? (
              <p id="noteError" className={contactStyle.errorText}>{errors.note}</p>
            ) : (
              <p className={contactStyle.errorText}></p>
            )}
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={contactStyle.button}
          >
            {isSubmitting ? `${t("load")}` : `${t("submit")}`}
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default FormikForm;
