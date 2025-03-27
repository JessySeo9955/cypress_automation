FROM node:22-alpine
# Set the working directory inside the container to /src
WORKDIR /src
# Copy the built application from the build stage
COPY --from=build /src .
# Expose port 3000
EXPOSE 3000
# Command to start the app (from the /src directory)
CMD ["npm", "run", "start:prod"]