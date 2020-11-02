import React from "react";

import { Container, Description, Box, Image, Button } from "./styles";

function Produto({ description, img, ...rest }) {
  return (
    <Box>
      <Container>
        <Button {...rest}>
          <Image source={img ? img : ""} />
        </Button>
      </Container>
      <Description>{description ? description : ""}</Description>
    </Box>
  );
}

export default Produto;
