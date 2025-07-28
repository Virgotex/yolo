Vagrant.configure("2") do |config|
  config.vm.box = "ubuntu/jammy64"  # Ubuntu 22.04 LTS
  config.vm.hostname = "yolo-devops"
  config.vm.network "private_network", ip: "192.168.56.10"

  config.vm.provider "virtualbox" do |vb|
    vb.name = "YOLO-DevOps"
    vb.memory = 2048
    vb.cpus = 2
  end

  config.vm.synced_folder ".", "/home/vagrant/yolo", type: "virtualbox"

  # Provision with Ansible
  config.vm.provision "ansible" do |ansible|
    ansible.playbook = "playbook.yml"
    ansible.inventory_path = "inventory.yml"
    ansible.limit = "all"
    ansible.verbose = "v"
  end
end