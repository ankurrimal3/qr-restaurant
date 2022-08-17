import AppForm from "components/Form";
import { Field } from "react-final-form";
import { Link } from "react-router-dom";
import { routes } from "routes/route.enum";
import styles from "./home.module.scss";

const Home = () => {
  return (
    <>
      Home Page
      <Link to={routes.ABOUT}>About</Link>
      <div className={styles.test}>Asd</div>
      <AppForm
        initialValues={{ test: "" }}
        onSubmit={(form) => {
          console.log(form);
        }}
      >
        {() => {
          return (
            <>
              <hr />
              <Field name="test">
                {({ input }) => (
                  <>
                    {input.value}
                    <input
                      type="text"
                      value={input.value}
                      onChange={input.onChange}
                    />
                  </>
                )}
              </Field>
            </>
          );
        }}
      </AppForm>
    </>
  );
};

export default Home;
