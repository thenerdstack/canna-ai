import React from "react";
import Container from "@material-ui/core/Container";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import VideoEmbed from "./VideoEmbed";

function VideoSection(props) {
  return (
    <Section
      bgColor={props.bgColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container>
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={4}
          textAlign="center"
        />
        <Container maxWidth="md" disableGutters={true}>
          <VideoEmbed url={props.embedUrl} />
        </Container>
      </Container>
    </Section>
  );
}

export default VideoSection;
