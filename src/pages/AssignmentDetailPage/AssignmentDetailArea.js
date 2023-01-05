import React from "react";
import { useTranslation } from "react-i18next";
import { Box, Text, Icon } from "@chakra-ui/react";
import { EditIcon, AttachmentIcon } from "@chakra-ui/icons";

function EditableTextBox({ value, title, editable = false }) {
  const { t } = useTranslation();
  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        backgroundColor="gray.300"
        borderRadius="8px"
        margin="0.8rem"
        padding="0.4rem"
      >
        <Text as="span" fontSize="md" fontWeight="bold">
          {t(title)}
        </Text>
        <Text as="span" fontSize="md">
          {t(value)}
        </Text>
        <button as="span" variant="ghost">
          <Icon
            as={editable ? EditIcon : AttachmentIcon}
            className="FileItem-icon"
            boxSize="4"
            color="#444444"
          />
        </button>
      </Box>
    </>
  );
}
function AssignmentDetailArea({ data }) {
  const { t } = useTranslation();

  return (
    <Box
      width="100%"
      height="50%"
      marginTop="25%"
      display="flex"
      zIndex="4"
      position="relative"
    >
      <Box
        width="33%"
        backgroundColor="#FFFFFF"
        margin={"5% 2% 0 2%"}
        borderRadius="24px"
      >
        <Text
          as="h3"
          fontWeight="extrabold"
          textAlign="center"
          paddingTop="3px"
          marginBottom="1rem"
        >
          {t("Details")}
        </Text>
        <EditableTextBox value={t(data.title)} title={t("Title")} editable />
        <EditableTextBox
          value={t(data.subject)}
          title={t("Subject")}
          editable
        />
        <EditableTextBox value={t(data.price)} title={t("Price")} editable />
      </Box>
      <Box
        width="33%"
        backgroundColor="#FFFFFF"
        margin={"5% 2% 0 2%"}
        borderRadius="24px"
      >
        <Text
          as="h3"
          fontWeight="extrabold"
          textAlign="center"
          paddingTop="3px"
        >
          {t("Question Files")}
        </Text>
      </Box>
      <Box
        width="33%"
        backgroundColor="#FFFFFF"
        margin={"5% 2% 0 2%"}
        borderRadius="24px"
      >
        <Text
          as="h3"
          fontWeight="extrabold"
          textAlign="center"
          paddingTop="3px"
        >
          {t("Reference Files")}
        </Text>
      </Box>
    </Box>
  );
}

export default AssignmentDetailArea;
