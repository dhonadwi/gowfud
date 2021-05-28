import { creatAboutTemplate } from '../templates/template-creator';

const AboutPage = {
  async render() {
    return creatAboutTemplate();
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default AboutPage;
