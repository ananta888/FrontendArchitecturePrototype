FROM alpine/git

ENV TZ="Europe/Berlin"
ENV GIT_SSL_CAINFO="/usr/local/share/ca-certificates/OrgaCard-Root-CA.crt"

USER 0:0
#RUN apt-get update
#RUN mkdir -p /usr/local/share/ca-certificates/
COPY OrgaCard-Root-CA.pem /usr/local/share/ca-certificates/OrgaCard-Root-CA.crt
#RUN apt-get update && apt-get install -y ca-certificates
#RUN update-ca-certificates
#RUN git config --global http.sslVerify false
