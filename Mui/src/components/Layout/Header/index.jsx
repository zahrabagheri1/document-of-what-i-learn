import { Stack } from "@mui/material";
import { AppBar } from "@mui/material";
import React from "react";

function index() {
  return (
    <AppBar color="transparent" elevation={0}>
      {/* component Header */}
      <Stack>
        {/* stack === div */}
        {/* we can use box but box have elovetion */}
        <Stack>
          <img
            width={60}
            height={60}
            alt="gelato logo"
            src="https://order.gelatohouse.ir/2.15.13/img/9dcd0541179a7fde025e88026901a4be.png"
          />
        </Stack>
        <Stack></Stack>
      </Stack>
    </AppBar>
  );
}

export default index;
