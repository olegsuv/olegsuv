import Box from "@mui/material/Box";
import * as React from "react";
import {
  Alert,
  Button,
  FormControl,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import PhoneInput from "react-phone-input-2";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ChatIcon from "@mui/icons-material/Chat";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import Snackbar from "@mui/material/Snackbar";
import { useRef, useState } from "react";
import "react-phone-input-2/lib/style.css";

export function Generator() {
  const [value, setValue] = useState();
  const [open, setOpen] = useState(false);
  const textFieldRef = useRef<HTMLInputElement | null>(null);

  const buttonProps = (backgroundColor: string) => ({
    disabled: !value,
    variant: "contained" as "contained",
    target: "_blank",
    sx: {
      backgroundColor,
      color: "white",
      margin: "0.5rem",
    },
  });

  const onCopyClick = () => {
    textFieldRef.current?.select();
    navigator.clipboard
      .writeText(window.location.href)
      .then(() => {
        setOpen(true);
      })
      .catch(() => {
        alert(
          "Your browser is not support clipboard API, please copy manually via CTRL+C"
        );
      });
  };

  return (
    <>
      <Typography variant="h1" fontSize="3rem" color="primary" mt={4}>
        Messengers link generator
      </Typography>
      <Typography mt={2} mb={2}>
        1. Enter anyone's phone number:
      </Typography>
      <PhoneInput
        inputProps={{
          name: "phone",
          required: true,
          autoFocus: true,
        }}
        country={"ua"}
        value={value}
        onChange={setValue as any}
      />
      <Typography mt={2} mb={2}>
        2. Get your links:
      </Typography>
      <Grid container ml={-1} mt={-1}>
        <Box>
          <Button
            href={`https://wa.me/${value}`}
            startIcon={<WhatsAppIcon />}
            {...buttonProps("#25d366")}
          >
            WhatsApp Page
          </Button>{" "}
          <Button
            href={`https://web.whatsapp.com/send/?phone=${value}&text&type=phone_number&app_absent=0`}
            startIcon={<WhatsAppIcon />}
            {...buttonProps("#25d366")}
          >
            WhatsApp Web Instant
          </Button>
        </Box>
        <Box>
          <Button
            href={`https:///t.me/+${value}`}
            startIcon={<TelegramIcon />}
            {...buttonProps("#0088cc")}
          >
            Telegram Page
          </Button>{" "}
          <Button
            href={`tg://resolve?phone=${value}`}
            startIcon={<TelegramIcon />}
            {...buttonProps("#0088cc")}
          >
            Telegram App Instant
          </Button>
        </Box>
        <Box>
          <Button
            href={`viber://add?number=${value}`}
            startIcon={<ChatIcon />}
            {...buttonProps("#6F00FF")}
          >
            Viber Add
          </Button>{" "}
          <Button
            href={`viber://chat?number=${value}`}
            startIcon={<ChatIcon />}
            {...buttonProps("#6F00FF")}
          >
            Viber Chat
          </Button>
        </Box>
      </Grid>
      <Typography mt={2} mb={2}>
        3. Share page with friends:
      </Typography>
      <FormControl>
        <TextField
          inputRef={textFieldRef}
          value={window.location.href}
          onClick={onCopyClick}
          sx={{
            width: 300,
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <ContentCopyIcon />
              </InputAdornment>
            ),
          }}
        />
      </FormControl>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={() => setOpen(false)}
      >
        <Alert
          onClose={() => setOpen(false)}
          severity={"success"}
          sx={{ width: "100%" }}
        >
          Link {window.location.href} was copied to clipboard!
        </Alert>
      </Snackbar>
    </>
  );
}
