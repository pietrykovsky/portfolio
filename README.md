# Portfolio Website

![Portfolio Preview](public/previews/portfolio.jpg)

## Demo
Check out the live demo: [pietrykovsky.com](https://pietrykovsky.com)

## Description
This project is a personal portfolio website built with Next.js and React Bootstrap. It showcases my projects, skills, and professional experience in a modern, responsive design. The site features internationalization support for English and Polish languages.

## Features
- Responsive design using React Bootstrap
- Dynamic project showcase
- About me section with professional background
- Resume/CV page
- Particle.js background for visual appeal
- Internationalization support (English and Polish)
- Contact form with reCAPTCHA integration and rate limiting

## Technologies Used
- Next.js
- React
- React Bootstrap
- Docker
- Nginx (for deployment)
- Particle.js
- next-intl (for internationalization)
- nodemailer (for sending emails)
- react-google-recaptcha (for spam protection)

## Prerequisites
- Node.js (v22)
- npm (v10)
- Docker and Docker Compose (for deployment)

## Local Development Setup
1. Clone the repository:
   ```
   git clone https://github.com/pietrykovsky/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up environment variables:
   - Copy the `.env.sample` file to `.env`:
     ```
     cp .env.sample .env
     ```
   - Fill in the necessary values in `.env`

4. Run the development server:
   ```
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to view the website.

## Environment Variables
The following environment variables need to be set in your `.env` file:

```
SMTP_HOST=smtp.host.com
SMTP_PORT=587
SMTP_USER=smtp-user
SMTP_PASS=smtp-pass
EMAIL_FROM=your-website@domain.example
EMAIL_TO=your-mail@example.com
NEXT_PUBLIC_RECAPTCHA_WEBSITE_KEY=your-recaptcha-site-key
RECAPTCHA_SECRET_KEY=your-recaptcha-secret-key
```

## Deployment
This project is set up for deployment using Docker and Nginx as a reverse proxy.

1. Ensure you have Docker and Docker Compose installed on your server.

2. Clone the repository on your server.

3. Create a `.env` file in the project root and add the necessary environment variables.

4. Build and start the Docker containers:
   ```
   docker-compose up -d --build
   ```

5. The application should now be running on your server.

## Nginx Configuration
To configure Nginx as a reverse proxy for your portfolio:

1. Add the following server block to your Nginx configuration file:

   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;

       location / {
           proxy_pass http://portfolio:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

2. Replace `yourdomain.com` with your actual domain name.

3. If you're using Docker Compose for Nginx, make sure the portfolio network is included:

   ```yaml
   version: '3.9'
   services:
     nginx:
       # ... (existing configuration)
       networks:
         - portfolio_app-network
   
   networks:
     portfolio_app-network:
       external: true
   ```

4. Restart Nginx to apply the changes:
   ```
   docker-compose restart nginx
   ```

## SSL Certificate
To secure your website with HTTPS:

1. Ensure your domain is pointed to your server's IP address.

2. Use Certbot (running in the Nginx container) to obtain an SSL certificate:
   ```
   docker-compose exec nginx certbot --nginx -d yourdomain.com
   ```

3. Follow the prompts to complete the certificate installation.

## GitHub Workflows
This project includes two GitHub workflow files located in the `.github/workflows` directory:

1. `deploy.yml`: This workflow is triggered when a new tag is pushed to the repository. It handles the deployment process to a private server.

2. `node.js.yml`: This workflow runs on pull requests to the master branch. It performs the following checks:
   - Sets up Node.js
   - Installs dependencies
   - Runs the linter
   - Builds a Docker image
   - Runs the container
   - Checks if the container is running

To use these workflows:
- Ensure your GitHub repository has the necessary secrets set up for deployment (e.g., SSH keys, server details).
- Adjust the workflows if needed to match your specific deployment process or CI/CD requirements.

## Internationalization
The project supports English and Polish languages. To add or modify translations:

1. Edit the JSON files in the `messages/en` and `messages/pl` directories.
2. Use the `useTranslations` hook from `next-intl` in your components to access translations.

## Customization
To personalize this portfolio for your own use, you'll need to make several changes:

### General Content
- Update the `src/app/page.js` file to modify the home page content.
- Edit `src/app/about/page.js` to update your about me information.
- Modify `src/app/projects/page.js` to showcase your projects.
- Customize the contact form in `src/app/contact/page.js`.

### Resume
- Replace the existing resume file:
  1. Create your new resume in PDF format.
  2. Name it `resume_preview.pdf`.
  3. Place it in the `public` directory, overwriting the existing file.
- Update `src/app/resume/page.js` if you need to change how the resume is displayed.

### Logos and Images
- To change the website logo:
  1. Create your new logo image.
  2. Place it in the `public/assets` directory.
  3. Update the `src/components/NavigationBar/NavigationBar.js` file to reference your new logo.
- To update other images (e.g., profile picture, project previews):
  1. Place your new images in the appropriate subdirectory within `public`.
  2. Update the relevant component files to reference the new image paths.

### Domain and Metadata
- Update the `src/app/layout.js` file:
  - Modify the `metadata` object to reflect your personal information and domain.
- In `next.config.mjs`, update any domain-specific configurations if necessary.

### Environment Variables
- Update the `.env` file with your personal SMTP settings, email addresses, and reCAPTCHA keys.

### Social Links
- Edit the `src/components/Footer.js` file to update the social media links with your personal profiles.

### Projects
- In `src/app/projects/page.js`, update the `projects` array with your own project information, including titles, descriptions, technologies used, and links.

### Styling
- To change colors, fonts, or other styling elements:
  1. Modify the CSS files in the `src/app` directory and component-specific CSS modules.
  2. Update the global styles in `src/app/globals.css`.

### GitHub Workflows
- If your deployment process differs, update the `.github/workflows/deploy.yml` file accordingly.
- Adjust the `.github/workflows/node.js.yml` file if you want to modify the CI process for pull requests.

Remember to test all changes thoroughly in a development environment before deploying to production.

## Contributing
Contributions, issues, and feature requests are welcome. Feel free to check [issues page](https://github.com/pietrykovsky/portfolio/issues) if you want to contribute.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements
- [Next.js](https://nextjs.org/)
- [React Bootstrap](https://react-bootstrap.github.io/)
- [Particle.js](https://particles.js.org/)
- [Docker](https://www.docker.com/)
- [Nginx](https://www.nginx.com/)
- [next-intl](https://github.com/amannn/next-intl)
- [nodemailer](https://nodemailer.com/)
- [react-google-recaptcha](https://github.com/dozoisch/react-google-recaptcha)