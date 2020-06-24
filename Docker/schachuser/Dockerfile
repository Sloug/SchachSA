FROM phusion/baseimage:18.04-1.0.0
RUN apt-get update && apt-get -o Dpkg::Options::='--force-confold' --force-yes -fuy dist-upgrade
RUN apt-get install git default-jdk wget net-tools -y
RUN DEBIAN_FRONTEND=noninteractive apt-get -y install mysql-server
RUN apt-get upgrade -y

RUN wget -qO - https://www.mongodb.org/static/pgp/server-4.2.asc | apt-key add -
RUN echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/4.2 multiverse" | tee /etc/apt/sources.list.d/mongodb-org-4.2.list
RUN apt-get update && apt-get install -y mongodb-org

RUN wget www.scala-lang.org/files/archive/scala-2.13.2.deb
RUN dpkg -i scala-2.13.2.deb

RUN echo "deb https://dl.bintray.com/sbt/debian /" | tee -a /etc/apt/sources.list.d/sbt.list
RUN apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 2EE0EA64E40A89B84B2DF73499E82A75642AC823
RUN apt-get update
RUN apt-get install sbt -y --allow-unauthenticated

RUN git clone https://github.com/Sloug/SchachUser.git
RUN cd /SchachUser && git pull && git checkout -t origin/mongoDB && sbt compile

ENTRYPOINT mongod --fork --config /etc/mongod.conf && service mysql start && cd /SchachUser && PASSWORD=$(cat /etc/mysql/debian.cnf | grep "password"| head -1 | sed -n -e 's/^.*= //p') sbt run
