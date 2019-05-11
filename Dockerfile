# specify the node base image with your desired version node:<version>
FROM node:6

RUN mkdir /code
WORKDIR /code
ADD . /code/

ADD entrypoint.sh /entrypoint.sh
RUN chmod a+x /entrypoint.sh

EXPOSE 3000

ENTRYPOINT [ "/entrypoint.sh" ]
