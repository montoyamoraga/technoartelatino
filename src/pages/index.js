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

    <p>This event is in partnership with the <a href="https://princetonlibrary.org/">Princeton Public Library</a> with support from the National Endowment for the Humanities. Registration is requested but not required. Please visit <a href="https://princetonlibrary.org/event/technoarte-latino/">this link to register</a> so that we may gauge attendance and prepare properly.</p>

    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>

    </div>

    <Img fluid={props.data.flyer.childImageSharp.fluid} />

    <br />

    <br />

    <h1><a href="https://cvalenzuelab.com">Cristobal Valenzuela</a></h1>

    <Img fluid={props.data.cris.childImageSharp.fluid} />

    <br/>

    <p>Cristobal is a technologist, artist and software developer from Chile and currently living in NYC who is interested in the intersection between artificial intelligence and creative tools. He is the director of Runway, researcher at New York University ITP, and co-founder of Latent Studio, a creative studio specializing in machine learning and artificial intelligence. He also contributes to OSS and helps maintain ml5.js. His work has been sponsored by Google and the Processing Foundation and his projects has been exhibited in Latin America and the US, including the Santiago Museum of Contemporary Art, ARS Electronica, GAM, Fundación Telefonica, Lollapalooza, NYC Media Lab, New Latin Wave, Inter-American Development Bank, Stanford University and New York University.</p>

    <h1><a href="http://www.franrodriguezsawaya.com/">Francesca Rodríguez-Sawaya</a></h1>

    <Img fluid={props.data.francesca.childImageSharp.fluid} />

    <br/>

    <br/>

    <p>Francesca is a Peruvian multimedia designer, videographer and educator. She is passionate about storytelling and social justice, and uses her skills as a technologist to instigate dialogue around topics such as culture, identity and community. She has been exploring the linkages between weaving and computational thinking, creating pieces that translate oral stories into physical weavings that have been exhibited at the New Latin Wave Festival in New York and Festival Internacional de Arte Contemporáneo in Perú. She served as a researcher at the Technology Lab at BF+DA at Pratt University and has also facilitated different workshops about the intersection of weaving and coding, in places like Pioneer Works, Currents New Media Festival and the Brooklyn Museum. She is currently co-curating the exhibition “Beyond Punch Cards”, that will bring together artists challenging the common perceptions of weaving and coding, that will take place in Santa Fe, New Mexico this upcoming June. She is currently the Lead Teacher at the NYC FIRST STEM Center located in Washington Heights, where she develops curriculum and teaches STEM related subjects to low income communities.</p>

    <h1><a href="https://chsnec.eccs.world">Sejo</a></h1>

    <Img fluid={props.data.sejo.childImageSharp.fluid} />

    <br/>

    <p>Sejo is a digital artisan from Mexico City and NYC; currently creating choreographic computers as part of chsnec; co-founder and member of the eccs.world collective of interdisciplinary arts (& crafts) where they develop free cultural works using and/or building free (libre) software;</p>

    <br/>

    <h1><a href="http://montoyamoraga.io">Aarón Montoya-Moraga</a></h1>

    <Img fluid={props.data.aaron.childImageSharp.fluid} />

    <br/>

    <p>Aarón is a multimedia artist, programmer and educator based in NYC and Santiago de Chile. Aarón is a co-founder and teacher at 'CODED Escuela', a media arts school based in Santiago that focuses on open-source creative programming. Aarón is a contributor to the 'Processing Foundation' & the open source project 'p5.js', releasing one of its books in Spanish language. Aarón also contributes to the open source project 'Kinectron' and is a curator at the 'New Latin Wave Festival'. Aarón is the founder of the record label 'bandurria', specializing in experimental sound art.</p>

    <h1><a href="https://www.martincalvino.co">Martin Calvino</a></h1>

    <Img fluid={props.data.martin.childImageSharp.fluid} />

    <br/>

    <p>Martin is a multimedia artist from Uruguay currently living in New Jersey. He is currently artist-in-residence at the 'Art and Artificial Intelligence Lab' at the Computer Science Department of Rutgers University. He was a Senior Research Assistant at the School of Creative Media, City University of Hong Kong; and previously attended the Interactive Telecommunications Program (ITP) at Tisch School of the Arts, New York University. He holds degrees in Plant Molecular Genetics from Rutgers University (PhD) and Tsukuba University (MS), and in Molecular Biology from the University of the Republic of Uruguay (BS). He conducted studies and works under the sponsorship of prestigious fellowships such as Fulbright (USA) and Monbukagakusho (Japan), and in 2012 received the Eileen Brennan Graduate Research Award from the department of Plant Biology & Pathology at Rutgers in recognition for his scientific output. Martin’s interest and work focuses on the integration of Art & Science, New Media Art and Tango, and artistic applications of Machine Learning and Artificial Intelligence. His work has been featured in CLOT Magazine, Interalia Magazine, and ART UNCOVERED radio podcast; whereas his texts have been published by NOEMA Magazine and Leonardo Journal. Martin's audiovisual work has been screened at MOTiF Film Festival and Proyecto Rotatoria. Prior to 'TechnoArte Latino', Martin's curatorial project included new media art & Uruguayan culture event at the Consulate General of Uruguay in New York City.</p>

    <br/>

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
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  fanni: file(relativePath: { eq: "fanni.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  francesca: file(relativePath: { eq: "francesca.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
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
  sejo: file(relativePath: { eq: "sejo.jpg" }) {
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
