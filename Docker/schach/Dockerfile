FROM phusion/baseimage
RUN apt-get update && apt-get -o Dpkg::Options::='--force-confold' --force-yes -fuy dist-upgrade
RUN apt-get install git default-jdk wget net-tools -y
RUN DEBIAN_FRONTEND=noninteractive apt-get -y install mysql-server
RUN wget www.scala-lang.org/files/archive/scala-2.13.2.deb
RUN dpkg -i scala-2.13.2.deb
RUN echo "deb https://dl.bintray.com/sbt/debian /" | tee -a /etc/apt/sources.list.d/sbt.list
RUN apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 2EE0EA64E40A89B84B2DF73499E82A75642AC823
RUN apt-get update
RUN apt-get install sbt -y --allow-unauthenticated
RUN git clone https://github.com/rarebu/swar-ss20-schach
RUN cd /swar-ss20-schach && git pull && git checkout -t origin/slick && PASSWORD=$(cat /etc/mysql/debian.cnf | grep "password"| head -1 | sed -n -e 's/^.*= //p') sbt compile
ENTRYPOINT service mysql start && cd /swar-ss20-schach && PASSWORD=$(cat /etc/mysql/debian.cnf | grep "password"| head -1 | sed -n -e 's/^.*= //p') sbt run
