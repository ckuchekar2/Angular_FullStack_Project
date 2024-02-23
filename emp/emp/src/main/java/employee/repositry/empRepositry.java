package employee.repositry;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import employee.entity.empReg;

@Repository
public interface empRepositry extends JpaRepository<empReg, Integer>{

}
