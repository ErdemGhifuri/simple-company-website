import type { NextPage } from "next";
import { useRef, useEffect, useState, FormEvent } from "react";
import propTypes from "prop-types";

// components
import { Container, Typography, Button, TextField } from "@mui/material";
import Animate from "../Animate";

// styles
import theme from "../../styles/Theme.module.scss";

const Contact: NextPage<{ yOffset: any }> = ({ yOffset }) => {
  // ref
  const ref: any = useRef(null);

  // state
  const [isVisible, setIsVisible] = useState(false);
  const [state, setState] = useState({
    email: "",
    feedback: "",
  });

  // onChange handler
  const onChangeHandler = (objValue: any) =>
    setState((prevState) => ({ ...prevState, ...objValue }));

  // submit handler
  const submitFeedback = (event: FormEvent) => {
    event.preventDefault();
    // TODO : Create action for email and feedback
    // eslint-disable-next-line no-console
    console.log(state);
  };

  useEffect(() => {
    const fadeIn = ref.current
      ? yOffset - 1000 > ref.current.getBoundingClientRect().top
      : false;
    if (fadeIn) setIsVisible(true);
  }, [yOffset]);
  return (
    <main className={`${theme.contact} py-16`} style={{ overflowX: "hidden" }}>
      <Container maxWidth="xl" className="grid grid-cols-1 xl:grid-cols-3">
        <Container className="border-r-4 grid content-center">
          <Animate
            animationIn="fadeInLeft"
            animationOut="fadeOutLeft"
            isVisible={isVisible}
          >
            <Typography variant="h2" component="div">
              CONTACT US
            </Typography>
          </Animate>
          <Animate
            animationIn="fadeInLeft"
            animationOut="fadeOutLeft"
            isVisible={isVisible}
            animationInDelay={400}
          >
            <Typography variant="h5" component="div">
              Reach us and discuss what you need
            </Typography>
          </Animate>
        </Container>
        <div className="col-span-2">
          <Container>
            <form action="#" method="get" onSubmit={submitFeedback}>
              <div className="pt-8">
                <Animate
                  animationIn="fadeInRight"
                  animationOut="fadeOutRight"
                  isVisible={isVisible}
                  animationInDelay={800}
                >
                  <TextField
                    fullWidth
                    type="email"
                    required
                    variant="filled"
                    className="mb-4 rounded-full"
                    label="Email"
                    onChange={(e) => onChangeHandler({ email: e.target.value })}
                  />
                </Animate>
                <Animate
                  animationIn="fadeInRight"
                  animationOut="fadeOutRight"
                  isVisible={isVisible}
                  animationInDelay={1200}
                >
                  <TextField
                    fullWidth
                    required
                    variant="filled"
                    multiline
                    rows={4}
                    label="Explain your interest"
                    onChange={(e) =>
                      onChangeHandler({ feedback: e.target.value })
                    }
                  />
                </Animate>
              </div>
              <div className="flex justify-end pt-2">
                <Animate
                  animationIn="fadeInRight"
                  animationOut="fadeOutRight"
                  isVisible={isVisible}
                  animationInDelay={1600}
                >
                  <Button
                    type="submit"
                    className={`${theme.btn1} rounded-full px-6`}
                    variant="contained"
                    ref={ref}
                  >
                    Send
                  </Button>
                </Animate>
              </div>
            </form>
          </Container>
        </div>
      </Container>
    </main>
  );
};

Contact.propTypes = {
  yOffset: propTypes.number,
};

Contact.defaultProps = {
  yOffset: 0,
};

export default Contact;
