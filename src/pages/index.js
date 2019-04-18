import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Img from "gatsby-image"
import { graphql } from "gatsby"


const IndexPage = (props) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h2>May 5th 2019, 2pm - 4:30pm</h2>
    <h3>At Princeton Public Library</h3>
    <p>TechnoArte Latino is a free multimedia art event featuring Latin artists currently living in United States who use cutting edge digital technologies as central part in their creative practices. The event will host talks and performances by renowned artists from the greater NYC area; and will take place at the Princeton Public Library, Princeton, New Jersey.</p>

    <p><a href="https://www.eventbrite.com/e/technoartelatino-tickets-60575987409">Free tickets through Eventbrite</a></p>

    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>

    </div>

    <Img fluid={props.data.flyer.childImageSharp.fluid} />

    <br />

    <br />

    <h1><a href="https://www.michellehessel.com">Michelle Hessel</a></h1>

    <Img fluid={props.data.michelle.childImageSharp.fluid} />

    <br/>

    <p>Born in Sao Paulo, Brazil and currently living in NYC, Michelle is a multimedia artist & user experience designer working at ALICE. Her works have been featured at 'The Economist', 'VICE Media', 'Communication Arts', and more. She has participated at design and new media events in United States, Europe and Brazil. Michelle is interested in creating experiences that live at the intersection of design, storytelling, and technology.</p>

    <br/>

    <h1><a href="https://cvalenzuelab.com">Cristobal Valenzuela</a></h1>

    <Img fluid={props.data.cris.childImageSharp.fluid} />

    <br/>

    <p>Cristobal is a technologist, artist and software developer from Chile and currently living in NYC who is interested in the intersection between artificial intelligence and creative tools. He is the director of Runway, researcher at New York University ITP, and co-founder of Latent Studio, a creative studio specializing in machine learning and artificial intelligence. He also contributes to OSS and helps maintain ml5.js. His work has been sponsored by Google and the Processing Foundation and his projects has been exhibited in Latin America and the US, including the Santiago Museum of Contemporary Art, ARS Electronica, GAM, Fundación Telefonica, Lollapalooza, NYC Media Lab, New Latin Wave, Inter-American Development Bank, Stanford University and New York University.</p>

    <h1><a href="http://unoseistres.com">Sharon Lee De La Cruz</a></h1>

    <Img fluid={props.data.sharon.childImageSharp.fluid} />

    <br/>

    <p>Sharon is an artist and activist of Latin descend from New York City. She earned a BFA from The Cooper Union, is a Fulbright scholar, and obtained her Masters at NYU’s ITP program (Interactive Telecommunications Program). Sharon’s work ranges from comics to interactive sculptures. She enjoys creating tools and activities that bridge the accessibility gap in STEM education. Sharon’s work is in the intersection of tech, art, and social justice. She currently lives in New Jersey and is the Assistant Director of The StudioLab, a creative tech lab, at Princeton University.</p>

    <h1><a href="https://escenaconsejo.org/en/">Sejo</a></h1>


    {/* <Img fluid={props.data.michelle.childImageSharp.fluid} /> */}

    <br/>

    <p>Sejo is from Mexico and is the co-founder of 'Es cena con sejo', a multimedia artist group whose work focuses on movement, interaction and conversation. Their work is informed by performing arts, media arts, socially engaged art, as well as by free(libre) software, computation and digital systems. They aim to imagine and contribute to the construction of a world of solidarity.</p>

    <h1><a href="http://www.ariciano.com">Ari Melenciano</a></h1>

    <Img fluid={props.data.ari.childImageSharp.fluid} />

    <br/>

    <p>Ari is an American-Dominican interdisciplinary artist, designer, creative technologist, researcher, educator and activist who is passionate about exploring the relationships between various forms of design and the human experience. Her research lies at the intersections of aesthetics, technology, art/design, psycho-geography, experiential design, pedagogy, geo-political activism, culture/humanities, speculative design, and imaginative uses of human-computer interaction technologies.</p>

    <p>Her projects include being the founder of the creative house, bgoti; lifestyle movement, Be Gold On The Inside; building a line of experimental "neo-retro" digital analog cameras, Ojo Oro; founder and producer of the New Media Arts, Culture and Technology Festival, Afrotectopia; founder and director of Publics.School, a platform exploring experimental methods to disseminate social justice issues; founder of Justice Factory, an interactive data visualization tool for activists that was recently awarded the Processing.org Fellowship (2018) to build a data visualization platform using Processing; founder of AricianoTV, an online video tutorial channel on creative coding; and a VJ/DJ (in the duo, GVÖ), with a residency in Brooklyn, NYC.</p>

    <h1><a href="http://montoyamoraga.io">Aarón Montoya-Moraga</a></h1>

    <Img fluid={props.data.aaron.childImageSharp.fluid} />

    <br/>

    <p>Aarón is a multimedia artist, programmer and educator based in NYC and Santiago de Chile. Aarón is a co-founder and teacher at 'CODED Escuela', a media arts school based in Santiago that focuses on open-source creative programming. Aarón is a contributor to the 'Processing Foundation' & the open source project 'p5.js', releasing one of its books in Spanish language. Aarón also contributes to the open source project 'Kinectron' and is a curator at the 'New Latin Wave Festival'. Aarón is the founder of the record label 'bandurria', specializing in experimental sound art.</p>

    <h1><a href="https://www.martincalvino.co">Martin Calvino</a></h1>

    <Img fluid={props.data.martin.childImageSharp.fluid} />

    <br/>

    <p>Martin is a multimedia artist from Uruguay currently living in New Jersey. He is currently artist-in-residence at the 'Art and Artificial Intelligence Lab' at the Computer Science Department of Rutgers University. He was a Senior Research Assistant at the School of Creative Media, City University of Hong Kong; and previously attended the Interactive Telecommunications Program (ITP) at Tisch School of the Arts, New York University. He holds degrees in Plant Molecular Genetics from Rutgers University (PhD) and Tsukuba University (MS), and in Molecular Biology from the University of the Republic of Uruguay (BS). He conducted studies and works under the sponsorship of prestigious fellowships such as Fulbright (USA) and Monbukagakusho (Japan), and in 2012 received the Eileen Brennan Graduate Research Award from the department of Plant Biology & Pathology at Rutgers in recognition for his scientific output. Martin’s interest and work focuses on the integration of Art & Science, New Media Art and Tango, and artistic applications of Machine Learning and Artificial Intelligence. His work has been featured in CLOT Magazine, Interalia Magazine, and ART UNCOVERED radio podcast; whereas his texts have been published by NOEMA Magazine and Leonardo Journal. Martin's audiovisual work has been screened at MOTiF Film Festival and Proyecto Rotatoria. Prior to 'TechnoArte Latino', Martin's curatorial project included new media art & Uruguayan culture event at the Consulate General of Uruguay in New York City.</p>

    <h1><a href="https://rumexinaction.com">Fanni Fazakas</a> (guest artist)</h1>

    <Img fluid={props.data.fanni.childImageSharp.fluid} />

    <br/>

    <p>Fanni manipulates and re-thinks the borders within what we manifest as human. She works across a range of media which includes and not limited to: video, sound, performance and installation. In all her work from interaction design to virtual reality it is clear that the core concept is key to it’s success. Each time she turn towards a new medium or subject she dedicates her time in deep analysis to building a strong approach.Fazakas graduated from Moholy-Nagy University of Art and Design where she studied Media Design, currently she is at New York University, ITP Master Program. These days her focus is on VR/AR/MR and film techniques, generative music and visual programming. She is working closely with a neuroscience team called MuArts to create interactive art and advertisement forms controlled by brainwaves. At the imPro Budapest School of Music Technology - she received extensive training in composing, sound design and engineering. She performed with her electronic Live Shows in Budapest, New York, Berlin, Umea, Rotterdam and Amsterdam at different Music Tech Festivals.</p>

  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
query {
  aaron: file(relativePath: { eq: "aaron.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 500) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  ari: file(relativePath: { eq: "ari.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 500) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  cris: file(relativePath: { eq: "cris.png" }) {
    childImageSharp {
      fluid(maxWidth: 500) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  fanni: file(relativePath: { eq: "fanni.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 500) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  martin: file(relativePath: { eq: "martin.webp" }) {
    childImageSharp {
      fluid(maxWidth: 500) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  michelle: file(relativePath: { eq: "michelle.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 500) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  sharon: file(relativePath: { eq: "sharon.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 500) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  flyer: file(relativePath: { eq: "flyer.webp" }) {
    childImageSharp {
      fluid(maxWidth: 500) {
        ...GatsbyImageSharpFluid
      }
    }
  }

}
`
