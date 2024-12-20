FROM node:20.11.1

ENV TZ="Europe/Berlin"
USER 0:0
RUN apt-get update
RUN mkdir -p /usr/local/share/ca-certificates/
COPY OrgaCard-Root-CA.pem /usr/local/share/ca-certificates/OrgaCard-Root-CA.crt
RUN apt-get update && apt-get install -y ca-certificates
RUN update-ca-certificates
