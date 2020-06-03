FROM phusion/baseimage
RUN apt-get update && apt-get -o Dpkg::Options::='--force-confold' --force-yes -fuy dist-upgrade
RUN apt-get install git default-jdk wget -y
RUN wget www.scala-lang.org/files/archive/scala-2.13.2.deb
RUN dpkg -i scala-2.13.2.deb
RUN echo "deb https://dl.bintray.com/sbt/debian /" | tee -a /etc/apt/sources.list.d/sbt.list
RUN apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 2EE0EA64E40A89B84B2DF73499E82A75642AC823
RUN apt-get update
RUN apt-get install sbt -y --allow-unauthenticated
RUN git clone https://github.com/Sloug/SchachUser.git
RUN cd /SchachUser && sbt compile
ENTRYPOINT cd /SchachUser && sbt run
