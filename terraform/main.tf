resource "aws_instance" "app_server" {
  ami                    = "ami-0c7217cdde317cfec" 
  instance_type          = "t3.micro"
  key_name               = var.key_name

  tags = {
    Name = "${var.project_name}-server"
  }
}
