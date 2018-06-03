FROM python:3.6-alpine

RUN apk add --update alpine-sdk
RUN apk add libffi-dev openssl-dev

ADD requirements.txt /
RUN pip install -r requirements.txt
ADD ./ /usr/src/backend

WORKDIR /usr/src/backend
