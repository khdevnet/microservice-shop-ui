FROM nginx:latest

# Add all frontend files to the default nginx working dir
ADD . /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/nginx.conf
WORKDIR /usr/share/nginx/html

# Expose default port
EXPOSE 80

# Run nginx as a blocking command
CMD ["nginx", "-g", "daemon off;"]