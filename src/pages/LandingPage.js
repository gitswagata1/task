import styled from 'styled-components';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const Hero = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 3rem;
  margin-bottom: 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 2rem;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const Card = styled.div`
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const LandingPage = () => {
  return (
    <Container>
      <Hero>
        <Title>Discover India's Rich Heritage</Title>
        <p>Experience the vibrant culture, traditions, and history of India</p>
      </Hero>

      <Grid>
        <Card>
          <h2>History</h2>
          <p>Explore India's ancient civilizations and rich historical legacy spanning over 5000 years.</p>
        </Card>
        <Card>
          <h2>Festivals</h2>
          <p>Celebrate the diversity of Indian festivals, from Diwali to Holi, each with its unique traditions.</p>
        </Card>
        <Card>
          <h2>Cuisine</h2>
          <p>Savor the flavors of Indian cuisine, known for its diverse spices and regional specialties.</p>
        </Card>
        <Card>
          <h2>Art Forms</h2>
          <p>Discover traditional Indian art forms, including classical dance, music, and visual arts.</p>
        </Card>
      </Grid>
    </Container>
  );
};

export default LandingPage;